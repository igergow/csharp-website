"use strict";(self.webpackChunkjava_lessons=self.webpackChunkjava_lessons||[]).push([[7673],{1810:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>m,contentTitle:()=>h,default:()=>b,frontMatter:()=>u,metadata:()=>p,toc:()=>x});var l=r(5893),i=r(1151),s=r(5162),t=r(4866);function a(e){const n={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u0438-\u043a\u043b\u0430\u0441\u043e\u0432\u0435",children:"\u0410\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u0438 \u043a\u043b\u0430\u0441\u043e\u0432\u0435"}),"\n",(0,l.jsx)(n.p,{children:"\u0410\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u0438\u0442\u0435 \u043a\u043b\u0430\u0441\u043e\u0432\u0435 \u0432 C# \u0441\u0430 \u043a\u043b\u0430\u0441\u043e\u0432\u0435, \u043e\u0442 \u043a\u043e\u0438\u0442\u043e \u043d\u0435 \u043c\u043e\u0436\u0435\u043c \u0434\u0430 \u0441\u044a\u0437\u0434\u0430\u0432\u0430\u043c\u0435 \u0434\u0438\u0440\u0435\u043a\u0442\u043d\u0438 \u0438\u043d\u0441\u0442\u0430\u043d\u0446\u0438\u0438. \u0422\u0435 \u0447\u0435\u0441\u0442\u043e \u0441\u043b\u0443\u0436\u0430\u0442 \u043a\u0430\u0442\u043e \u0431\u0430\u0437\u043e\u0432\u0438 \u043a\u043b\u0430\u0441\u043e\u0432\u0435 \u0437\u0430 \u043d\u0430\u0441\u043b\u0435\u0434\u044f\u0432\u0430\u043d\u0435."}),"\n",(0,l.jsx)(n.h3,{id:"\u043f\u0440\u0438\u043c\u0435\u0440",children:"\u041f\u0440\u0438\u043c\u0435\u0440:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-csharp",children:"abstract class Shape {\n    public abstract double Area();\n}\n\nclass Circle : Shape {\n    public double Radius;\n\n    public Circle(double radius) {\n        this.Radius = radius;\n    }\n\n    public override double Area() {\n        return Math.PI * Radius * Radius;\n    }\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0438",children:"\u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0438"}),"\n",(0,l.jsx)(n.p,{children:'\u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0438\u0442\u0435 \u0432 C# \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0442 \u043d\u0430\u0431\u043e\u0440 \u043e\u0442 \u043c\u0435\u0442\u043e\u0434\u0438 \u0438 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430, \u043a\u043e\u0438\u0442\u043e \u0434\u0430\u0434\u0435\u043d \u043a\u043b\u0430\u0441 \u043c\u043e\u0436\u0435 \u0434\u0430 \u0438\u043c\u043f\u043b\u0435\u043c\u0435\u043d\u0442\u0438\u0440\u0430. \u0422\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0432\u0430\u0442 "\u0434\u043e\u0433\u043e\u0432\u043e\u0440", \u043a\u043e\u0439\u0442\u043e \u043a\u043b\u0430\u0441\u043e\u0432\u0435\u0442\u0435 \u0442\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u0441\u043f\u0430\u0437\u044f\u0442.'}),"\n",(0,l.jsx)(n.h3,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-1",children:"\u041f\u0440\u0438\u043c\u0435\u0440:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-csharp",children:'interface ITalkative {\n    void Talk();\n\n    void IntroduceAsTalkative() {\n        Console.WriteLine("I can talk!");\n    }\n}\n\nclass Person : ITalkative {\n    public void Talk() {\n        Console.WriteLine("Hello!");\n    }\n}\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u041e\u0431\u044f\u0441\u043d\u0435\u043d\u0438\u0435: \u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0438\u0442\u0435 \u0432 C# \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0432\u0430\u0442 \u043d\u0430 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u0438 \u043a\u043b\u0430\u0441\u043e\u0432\u0435 \u0434\u0430 \u0441\u043f\u043e\u0434\u0435\u043b\u044f\u0442 \u043e\u0431\u0449\u0438 \u043c\u0435\u0442\u043e\u0434\u0438. \u0422\u0435 \u0441\u0430 \u043f\u043e\u043b\u0435\u0437\u043d\u0438 \u0437\u0430 \u0441\u044a\u0437\u0434\u0430\u0432\u0430\u043d\u0435 \u043d\u0430 \u043c\u043e\u0434\u0443\u043b\u0430\u0440\u0435\u043d \u0438 \u043f\u043e\u043b\u0438\u043c\u043e\u0440\u0444\u0438\u0447\u0435\u043d \u043a\u043e\u0434."}),"\n",(0,l.jsx)(n.h2,{id:"\u043f\u043e\u043b\u0438\u043c\u043e\u0440\u0444\u0438\u0437\u044a\u043c",children:"\u041f\u043e\u043b\u0438\u043c\u043e\u0440\u0444\u0438\u0437\u044a\u043c"}),"\n",(0,l.jsx)(n.p,{children:"\u041f\u043e\u043b\u0438\u043c\u043e\u0440\u0444\u0438\u0437\u043c\u044a\u0442 \u0432 C# \u043e\u0437\u043d\u0430\u0447\u0430\u0432\u0430, \u0447\u0435 \u0435\u0434\u0438\u043d \u043e\u0431\u0435\u043a\u0442 \u043c\u043e\u0436\u0435 \u0434\u0430 \u0441\u0435 \u0442\u0440\u0435\u0442\u0438\u0440\u0430 \u043a\u0430\u0442\u043e \u0438\u043d\u0441\u0442\u0430\u043d\u0446\u0438\u044f \u043d\u0430 \u0441\u0432\u043e\u044f \u0431\u0430\u0437\u043e\u0432 \u043a\u043b\u0430\u0441 \u0438\u043b\u0438 \u043a\u0430\u0442\u043e \u0438\u043d\u0441\u0442\u0430\u043d\u0446\u0438\u044f \u043d\u0430 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441, \u043a\u043e\u0439\u0442\u043e \u0442\u043e\u0439 \u0438\u043c\u043f\u043b\u0435\u043c\u0435\u043d\u0442\u0438\u0440\u0430."}),"\n",(0,l.jsx)(n.h3,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-2",children:"\u041f\u0440\u0438\u043c\u0435\u0440:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-csharp",children:'Shape myCircle = new Circle(5);\nConsole.WriteLine("The area of the circle is: " + myCircle.Area());\n\nITalkative person = new Person();\nperson.Talk();\n'})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"\u0437\u0430\u0434\u0430\u0447\u0438",children:"\u0417\u0430\u0434\u0430\u0447\u0438:"}),"\n",(0,l.jsx)(n.h3,{id:"1-\u043a\u043b\u0430\u0441\u043e\u0432\u0435",children:"1. \u041a\u043b\u0430\u0441\u043e\u0432\u0435"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u0417\u0430\u0434\u0430\u0447\u0430:"})," \u0421\u044a\u0437\u0434\u0430\u0439\u0442\u0435 \u043a\u043b\u0430\u0441 ",(0,l.jsx)(n.code,{children:"Book"})," \u0441\u044a\u0441 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 ",(0,l.jsx)(n.code,{children:"Title"})," \u0438 ",(0,l.jsx)(n.code,{children:"Author"}),". \u0414\u043e\u0431\u0430\u0432\u0435\u0442\u0435 \u043c\u0435\u0442\u043e\u0434 ",(0,l.jsx)(n.code,{children:"Read()"}),', \u043a\u043e\u0439\u0442\u043e \u0438\u0437\u0432\u0435\u0436\u0434\u0430 "Reading [Title] by [Author]".']}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435:"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-csharp",children:'class Book {\n    public string Title;\n    public string Author;\n\n    public Book(string title, string author) {\n        this.Title = title;\n        this.Author = author;\n    }\n\n    public void Read() {\n        Console.WriteLine($"Reading {Title} by {Author}");\n    }\n}\n'})}),"\n",(0,l.jsx)(n.h3,{id:"2-\u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u0438-\u043a\u043b\u0430\u0441\u043e\u0432\u0435",children:"2. \u0410\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u0438 \u043a\u043b\u0430\u0441\u043e\u0432\u0435"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u0417\u0430\u0434\u0430\u0447\u0430:"})," \u0421\u044a\u0437\u0434\u0430\u0439\u0442\u0435 \u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u0435\u043d \u043a\u043b\u0430\u0441 ",(0,l.jsx)(n.code,{children:"Animal"})," \u0441 \u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u0435\u043d \u043c\u0435\u0442\u043e\u0434 ",(0,l.jsx)(n.code,{children:"MakeSound()"}),". \u0421\u044a\u0437\u0434\u0430\u0439\u0442\u0435 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u043d\u0438 \u043a\u043b\u0430\u0441\u043e\u0432\u0435 ",(0,l.jsx)(n.code,{children:"Cat"})," \u0438 ",(0,l.jsx)(n.code,{children:"Dog"}),", \u043a\u043e\u0438\u0442\u043e \u0438\u043c\u043f\u043b\u0435\u043c\u0435\u043d\u0442\u0438\u0440\u0430\u0442 \u043c\u0435\u0442\u043e\u0434\u0430 ",(0,l.jsx)(n.code,{children:"MakeSound()"}),"."]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435:"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-csharp",children:'abstract class Animal {\n    public abstract void MakeSound();\n}\n\nclass Cat : Animal {\n    public override void MakeSound() {\n        Console.WriteLine("Meow, meow!");\n    }\n}\n\nclass Dog : Animal {\n    public override void MakeSound() {\n        Console.WriteLine("Woof, woof!");\n    }\n}\n'})}),"\n",(0,l.jsx)(n.h3,{id:"3-\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0438",children:"3. \u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0438"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u0417\u0430\u0434\u0430\u0447\u0430:"})," \u0421\u044a\u0437\u0434\u0430\u0439\u0442\u0435 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 ",(0,l.jsx)(n.code,{children:"ISwimmable"})," \u0441 \u043c\u0435\u0442\u043e\u0434 ",(0,l.jsx)(n.code,{children:"Swim()"}),". \u0421\u044a\u0437\u0434\u0430\u0439\u0442\u0435 \u043a\u043b\u0430\u0441 ",(0,l.jsx)(n.code,{children:"Fish"}),", \u043a\u043e\u0439\u0442\u043e \u0438\u043c\u043f\u043b\u0435\u043c\u0435\u043d\u0442\u0438\u0440\u0430 ",(0,l.jsx)(n.code,{children:"ISwimmable"}),"."]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435:"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-csharp",children:'interface ISwimmable {\n    void Swim();\n}\n\nclass Fish : ISwimmable {\n    public void Swim() {\n        Console.WriteLine("The fish is swimming.");\n    }\n}\n'})}),"\n",(0,l.jsx)(n.h3,{id:"4-\u043f\u043e\u043b\u0438\u043c\u043e\u0440\u0444\u0438\u0437\u044a\u043c",children:"4. \u041f\u043e\u043b\u0438\u043c\u043e\u0440\u0444\u0438\u0437\u044a\u043c"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u0417\u0430\u0434\u0430\u0447\u0430:"})," \u0418\u0437\u043f\u043e\u043b\u0437"]}),"\n",(0,l.jsx)(n.p,{children:"\u0432\u0430\u0439\u0442\u0435 \u043a\u043b\u0430\u0441\u043e\u0432\u0435\u0442\u0435 \u0438 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0438\u0442\u0435 \u043e\u0442 \u043f\u0440\u0435\u0434\u0438\u0448\u043d\u0438\u0442\u0435 \u0437\u0430\u0434\u0430\u0447\u0438, \u0437\u0430 \u0434\u0430 \u0434\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0438\u0440\u0430\u0442\u0435 \u043f\u043e\u043b\u0438\u043c\u043e\u0440\u0444\u0438\u0437\u044a\u043c."}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435:"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-csharp",children:'public class Demo {\n    public static void Main() {\n        Animal myAnimal = new Cat();\n        myAnimal.MakeSound();  // Outputs "Meow, meow!"\n\n        ISwimmable myFish = new Fish();\n        myFish.Swim();  // Outputs "The fish is swimming."\n    }\n}\n'})})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}function o(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"C# \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u044f \u0432\u044a\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0437\u0430 \u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0446\u0438\u044f \u0438 \u0433\u044a\u0432\u043a\u0430\u0432\u043e \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u0430 \u043a\u043e\u0434\u0430 \u0447\u0440\u0435\u0437 \u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u0438 \u043a\u043b\u0430\u0441\u043e\u0432\u0435, \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0438 \u0438 \u043f\u043e\u043b\u0438\u043c\u043e\u0440\u0444\u0438\u0437\u044a\u043c."}),"\n",(0,l.jsx)(n.h2,{id:"\u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u0438-\u043a\u043b\u0430\u0441\u043e\u0432\u0435",children:"\u0410\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u0438 \u041a\u043b\u0430\u0441\u043e\u0432\u0435"}),"\n",(0,l.jsx)(n.p,{children:"\u0410\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u0438\u044f\u0442 \u043a\u043b\u0430\u0441 \u0435 \u043a\u043b\u0430\u0441, \u043e\u0442 \u043a\u043e\u0439\u0442\u043e \u043d\u0435 \u043c\u043e\u0433\u0430\u0442 \u0434\u0430 \u0441\u0435 \u0441\u044a\u0437\u0434\u0430\u0432\u0430\u0442 \u0434\u0438\u0440\u0435\u043a\u0442\u043d\u0438 \u0438\u043d\u0441\u0442\u0430\u043d\u0446\u0438\u0438. \u0422\u043e\u0439 \u0447\u0435\u0441\u0442\u043e \u0441\u044a\u0434\u044a\u0440\u0436\u0430 \u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u0438 \u043c\u0435\u0442\u043e\u0434\u0438 \u0431\u0435\u0437 \u0438\u043c\u043f\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f, \u043a\u043e\u0438\u0442\u043e \u0442\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u0431\u044a\u0434\u0430\u0442 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438 \u0432 \u043a\u043b\u0430\u0441\u043e\u0432\u0435\u0442\u0435 \u043d\u0430\u0441\u043b\u0435\u0434\u043d\u0438\u0446\u0438."}),"\n",(0,l.jsx)(n.h3,{id:"\u043e\u0441\u043e\u0431\u0435\u043d\u043e\u0441\u0442\u0438-\u043d\u0430-\u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u0438\u0442\u0435-\u043a\u043b\u0430\u0441\u043e\u0432\u0435",children:"\u041e\u0441\u043e\u0431\u0435\u043d\u043e\u0441\u0442\u0438 \u043d\u0430 \u0410\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u0438\u0442\u0435 \u041a\u043b\u0430\u0441\u043e\u0432\u0435:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u0421\u044a\u0434\u044a\u0440\u0436\u0430\u0442 \u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u0438 \u043c\u0435\u0442\u043e\u0434\u0438 \u0431\u0435\u0437 \u0438\u043c\u043f\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f."}),"\n",(0,l.jsx)(n.li,{children:"\u041c\u043e\u0433\u0430\u0442 \u0434\u0430 \u0432\u043a\u043b\u044e\u0447\u0432\u0430\u0442 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u0438 \u043c\u0435\u0442\u043e\u0434\u0438 \u0441 \u0438\u043c\u043f\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f."}),"\n",(0,l.jsx)(n.li,{children:"\u041d\u0435 \u043c\u043e\u0433\u0430\u0442 \u0434\u0430 \u0431\u044a\u0434\u0430\u0442 \u0438\u043d\u0441\u0442\u0430\u043d\u0446\u0438\u0440\u0430\u043d\u0438 \u0434\u0438\u0440\u0435\u043a\u0442\u043d\u043e."}),"\n",(0,l.jsx)(n.li,{children:"\u041d\u0430\u0441\u043b\u0435\u0434\u043d\u0438\u0446\u0438\u0442\u0435 \u0442\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u044f\u0442 \u0438\u043c\u043f\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u043d\u0430 \u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u0438\u0442\u0435 \u043c\u0435\u0442\u043e\u0434\u0438."}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u043f\u0440\u0438\u043c\u0435\u0440",children:"\u041f\u0440\u0438\u043c\u0435\u0440:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-csharp",children:'public abstract class Animal {\n    public abstract void MakeSound();\n\n    public void Breathe() {\n        Console.WriteLine("I\'m breathing.");\n    }\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0438",children:"\u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0438"}),"\n",(0,l.jsx)(n.p,{children:"\u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0438\u0442\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0442 \u043d\u0430\u0431\u043e\u0440 \u043e\u0442 \u043c\u0435\u0442\u043e\u0434\u0438 \u0438 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430, \u043a\u043e\u0438\u0442\u043e \u043a\u043b\u0430\u0441\u043e\u0432\u0435\u0442\u0435 \u0442\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u0438\u043c\u043f\u043b\u0435\u043c\u0435\u043d\u0442\u0438\u0440\u0430\u0442."}),"\n",(0,l.jsx)(n.h3,{id:"\u043e\u0441\u043d\u043e\u0432\u0438-\u043d\u0430-\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0438\u0442\u0435",children:"\u041e\u0441\u043d\u043e\u0432\u0438 \u043d\u0430 \u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0438\u0442\u0435:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0438\u0442\u0435 \u043c\u043e\u0433\u0430\u0442 \u0434\u0430 \u0441\u044a\u0434\u044a\u0440\u0436\u0430\u0442 \u0441\u0430\u043c\u043e \u0434\u0435\u043a\u043b\u0430\u0440\u0430\u0446\u0438\u0438 \u043d\u0430 \u043c\u0435\u0442\u043e\u0434\u0438 \u0438 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430."}),"\n",(0,l.jsx)(n.li,{children:"\u041e\u0442 C# 8.0, \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0438\u0442\u0435 \u043c\u043e\u0433\u0430\u0442 \u0434\u0430 \u0441\u044a\u0434\u044a\u0440\u0436\u0430\u0442 default \u0438\u043c\u043f\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 \u043d\u0430 \u043c\u0435\u0442\u043e\u0434\u0438."}),"\n",(0,l.jsx)(n.li,{children:"\u041d\u0435 \u0441\u044a\u0434\u044a\u0440\u0436\u0430\u0442 \u043f\u043e\u043b\u0435\u0442\u0430 \u0438\u043b\u0438 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440\u0438."}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-1",children:"\u041f\u0440\u0438\u043c\u0435\u0440:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-csharp",children:'public interface IFlyable {\n    void Fly();\n\n    void Glide() {\n        Console.WriteLine("Gliding in the air.");\n    }\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"\u043f\u043e\u043b\u0438\u043c\u043e\u0440\u0444\u0438\u0437\u044a\u043c",children:"\u041f\u043e\u043b\u0438\u043c\u043e\u0440\u0444\u0438\u0437\u044a\u043c"}),"\n",(0,l.jsx)(n.p,{children:"\u041f\u043e\u043b\u0438\u043c\u043e\u0440\u0444\u0438\u0437\u043c\u044a\u0442 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0432\u0430 \u043e\u0431\u0435\u043a\u0442\u0438\u0442\u0435 \u0434\u0430 \u0441\u0435 \u0442\u0440\u0435\u0442\u0438\u0440\u0430\u0442 \u043a\u0430\u0442\u043e \u0438\u043d\u0441\u0442\u0430\u043d\u0446\u0438\u0438 \u043d\u0430 \u0442\u0435\u0445\u043d\u0438\u044f \u0431\u0430\u0437\u043e\u0432 \u043a\u043b\u0430\u0441 \u0438\u043b\u0438 \u043a\u0430\u0442\u043e \u0438\u043d\u0441\u0442\u0430\u043d\u0446\u0438\u0438 \u043d\u0430 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0438, \u043a\u043e\u0438\u0442\u043e \u0438\u043c\u043f\u043b\u0435\u043c\u0435\u043d\u0442\u0438\u0440\u0430\u0442."}),"\n",(0,l.jsx)(n.h3,{id:"\u043e\u0441\u043d\u043e\u0432\u0438-\u043d\u0430-\u043f\u043e\u043b\u0438\u043c\u043e\u0440\u0444\u0438\u0437\u043c\u0430",children:"\u041e\u0441\u043d\u043e\u0432\u0438 \u043d\u0430 \u041f\u043e\u043b\u0438\u043c\u043e\u0440\u0444\u0438\u0437\u043c\u0430:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u0420\u0430\u0437\u043b\u0438\u0447\u043d\u0438 \u043a\u043b\u0430\u0441\u043e\u0432\u0435 \u043c\u043e\u0433\u0430\u0442 \u0434\u0430 \u0438\u043c\u043f\u043b\u0435\u043c\u0435\u043d\u0442\u0438\u0440\u0430\u0442 \u0435\u0434\u0438\u043d \u0438 \u0441\u044a\u0449 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441."}),"\n",(0,l.jsx)(n.li,{children:"\u041e\u0431\u0435\u043a\u0442\u0438\u0442\u0435 \u043c\u043e\u0433\u0430\u0442 \u0434\u0430 \u0431\u044a\u0434\u0430\u0442 \u0440\u0435\u0444\u0435\u0440\u0438\u0440\u0430\u043d\u0438 \u0447\u0440\u0435\u0437 \u0440\u0435\u0444\u0435\u0440\u0435\u043d\u0446\u0438\u044f \u043d\u0430 \u0431\u0430\u0437\u043e\u0432 \u043a\u043b\u0430\u0441 \u0438\u043b\u0438 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441."}),"\n",(0,l.jsx)(n.li,{children:"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0432\u0430 \u0433\u044a\u0432\u043a\u0430\u0432\u043e\u0441\u0442 \u0438 \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u0430 \u0443\u043f\u043e\u0442\u0440\u0435\u0431\u0430 \u043d\u0430 \u043a\u043e\u0434."}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-2",children:"\u041f\u0440\u0438\u043c\u0435\u0440:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-csharp",children:'public class Bird : IFlyable {\n    public void Fly() {\n        Console.WriteLine("Bird is flying.");\n    }\n}\n\nIFlyable myBird = new Bird();\nmyBird.Fly();  // Executes the Fly() method of Bird, even though the reference type is IFlyable.\n'})}),"\n",(0,l.jsx)(n.h2,{id:"\u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u0438-\u0444\u0430\u043a\u0442\u0438-\u0438-\u0441\u044a\u0432\u0435\u0442\u0438",children:"\u0418\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u0438 \u0424\u0430\u043a\u0442\u0438 \u0438 \u0421\u044a\u0432\u0435\u0442\u0438"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u0410\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u0438\u0442\u0435 \u043a\u043b\u0430\u0441\u043e\u0432\u0435 \u0438 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0438\u0442\u0435 \u0432 C# \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u044f\u0442 \u0440\u0430\u043c\u043a\u0430 \u0437\u0430"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u0441\u044a\u0437\u0434\u0430\u0432\u0430\u043d\u0435 \u043d\u0430 \u0445\u0438\u0435\u0440\u0430\u0440\u0445\u0438\u0447\u043d\u0438 \u0438 \u043c\u043e\u0434\u0443\u043b\u0430\u0440\u043d\u0438 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0438."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"C# \u043f\u043e\u0434\u0434\u044a\u0440\u0436\u0430 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u043e \u043d\u0430\u0441\u043b\u0435\u0434\u044f\u0432\u0430\u043d\u0435 \u043d\u0430 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0438, \u043d\u043e \u0435\u0434\u0438\u043d\u0438\u0447\u043d\u043e \u043d\u0430\u0441\u043b\u0435\u0434\u044f\u0432\u0430\u043d\u0435 \u043d\u0430 \u043a\u043b\u0430\u0441\u043e\u0432\u0435."}),"\n",(0,l.jsx)(n.li,{children:"\u041f\u043e\u043b\u0438\u043c\u043e\u0440\u0444\u0438\u0437\u043c\u044a\u0442 \u0443\u043b\u0435\u0441\u043d\u044f\u0432\u0430 \u0434\u043e\u0431\u0430\u0432\u044f\u043d\u0435\u0442\u043e \u043d\u0430 \u043d\u043e\u0432\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u043d\u043e\u0441\u0442\u0438 \u0431\u0435\u0437 \u0434\u0430 \u0441\u0435 \u043d\u0430\u0440\u0443\u0448\u0430\u0432\u0430 \u0441\u044a\u0449\u0435\u0441\u0442\u0432\u0443\u0432\u0430\u0449\u0430\u0442\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u043d\u043e\u0441\u0442."}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}const u={id:"04-polymorphism",slug:"/lectures/04-polymorphism",title:"\u041f\u043e\u043b\u0438\u043c\u043e\u0440\u0444\u0438\u0437\u044a\u043c \u0432 C#",description:"\u0418\u0437\u0441\u043b\u0435\u0434\u0432\u0430\u0439\u0442\u0435 \u043f\u043e\u043b\u0438\u043c\u043e\u0440\u0444\u0438\u0437\u043c\u0430 \u0432 C# \u0438 \u043d\u0435\u0433\u043e\u0432\u043e\u0442\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0432 \u043e\u0431\u0435\u043a\u0442\u043d\u043e-\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u0430\u043d\u043e\u0442\u043e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u0438\u0440\u0430\u043d\u0435. \ud83d\udd2e",sidebar_label:"\u041f\u043e\u043b\u0438\u043c\u043e\u0440\u0444\u0438\u0437\u044a\u043c",sidebar_class_name:"standard",sidebar_position:4,image:"/images/lectures.jpg",tags:["\u043b\u0435\u043a\u0446\u0438\u0438","\u043e\u043e\u043f","\u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u0438 \u043a\u043b\u0430\u0441\u043e\u0432\u0435","\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0438","\u043f\u043e\u043b\u0438\u0444\u043e\u0440\u043c\u0438\u0437\u044a\u043c"],keywords:["\u041f\u043e\u043b\u0438\u043c\u043e\u0440\u0444\u0438\u0437\u044a\u043c","\u041e\u041e\u041f","\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u0438\u0440\u0430\u043d\u0435"],hide_title:!1,hide_table_of_contents:!0,draft:!1,unlisted:!1},h=void 0,p={id:"generated/04-polymorphism",title:"\u041f\u043e\u043b\u0438\u043c\u043e\u0440\u0444\u0438\u0437\u044a\u043c \u0432 C#",description:"\u0418\u0437\u0441\u043b\u0435\u0434\u0432\u0430\u0439\u0442\u0435 \u043f\u043e\u043b\u0438\u043c\u043e\u0440\u0444\u0438\u0437\u043c\u0430 \u0432 C# \u0438 \u043d\u0435\u0433\u043e\u0432\u043e\u0442\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0432 \u043e\u0431\u0435\u043a\u0442\u043d\u043e-\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u0430\u043d\u043e\u0442\u043e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u0438\u0440\u0430\u043d\u0435. \ud83d\udd2e",source:"@site/docs/generated/04-polymorphism.mdx",sourceDirName:"generated",slug:"/lectures/04-polymorphism",permalink:"/lectures/04-polymorphism",draft:!1,unlisted:!1,tags:[{label:"\u043b\u0435\u043a\u0446\u0438\u0438",permalink:"/tags/\u043b\u0435\u043a\u0446\u0438\u0438"},{label:"\u043e\u043e\u043f",permalink:"/tags/\u043e\u043e\u043f"},{label:"\u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u0438 \u043a\u043b\u0430\u0441\u043e\u0432\u0435",permalink:"/tags/\u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u0438-\u043a\u043b\u0430\u0441\u043e\u0432\u0435"},{label:"\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0438",permalink:"/tags/\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0438"},{label:"\u043f\u043e\u043b\u0438\u0444\u043e\u0440\u043c\u0438\u0437\u044a\u043c",permalink:"/tags/\u043f\u043e\u043b\u0438\u0444\u043e\u0440\u043c\u0438\u0437\u044a\u043c"}],version:"current",sidebarPosition:4,frontMatter:{id:"04-polymorphism",slug:"/lectures/04-polymorphism",title:"\u041f\u043e\u043b\u0438\u043c\u043e\u0440\u0444\u0438\u0437\u044a\u043c \u0432 C#",description:"\u0418\u0437\u0441\u043b\u0435\u0434\u0432\u0430\u0439\u0442\u0435 \u043f\u043e\u043b\u0438\u043c\u043e\u0440\u0444\u0438\u0437\u043c\u0430 \u0432 C# \u0438 \u043d\u0435\u0433\u043e\u0432\u043e\u0442\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0432 \u043e\u0431\u0435\u043a\u0442\u043d\u043e-\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u0430\u043d\u043e\u0442\u043e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u0438\u0440\u0430\u043d\u0435. \ud83d\udd2e",sidebar_label:"\u041f\u043e\u043b\u0438\u043c\u043e\u0440\u0444\u0438\u0437\u044a\u043c",sidebar_class_name:"standard",sidebar_position:4,image:"/images/lectures.jpg",tags:["\u043b\u0435\u043a\u0446\u0438\u0438","\u043e\u043e\u043f","\u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u0438 \u043a\u043b\u0430\u0441\u043e\u0432\u0435","\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0438","\u043f\u043e\u043b\u0438\u0444\u043e\u0440\u043c\u0438\u0437\u044a\u043c"],keywords:["\u041f\u043e\u043b\u0438\u043c\u043e\u0440\u0444\u0438\u0437\u044a\u043c","\u041e\u041e\u041f","\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u0438\u0440\u0430\u043d\u0435"],hide_title:!1,hide_table_of_contents:!0,draft:!1,unlisted:!1},sidebar:"tutorialSidebar",previous:{title:"\u041a\u043b\u0430\u0441\u043e\u0432\u0435 \u0438 \u041e\u0431\u0435\u043a\u0442\u0438",permalink:"/lectures/03-classes"},next:{title:"\u0418\u0437\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f",permalink:"/lectures/05-exceptions"}},m={},x=[];function j(e){return(0,l.jsxs)(t.Z,{defaultValue:"theory",values:[{label:"\u0422\u0435\u043e\u0440\u0438\u044f",value:"theory"},{label:"\u041a\u043e\u0434",value:"code"}],children:[(0,l.jsx)(s.Z,{value:"theory",children:(0,l.jsx)(d,{})}),(0,l.jsx)(s.Z,{value:"code",children:(0,l.jsx)(c,{})})]})}function b(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(j,{...e})}):j()}},5162:(e,n,r)=>{r.d(n,{Z:()=>t});r(7294);var l=r(6010);const i={tabItem:"tabItem_Ymn6"};var s=r(5893);function t(e){let{children:n,hidden:r,className:t}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,l.Z)(i.tabItem,t),hidden:r,children:n})}},4866:(e,n,r)=>{r.d(n,{Z:()=>w});var l=r(7294),i=r(6010),s=r(2466),t=r(6550),a=r(469),c=r(1980),o=r(7392),d=r(12);function u(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,l.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:l,default:i}}=e;return{value:n,label:r,attributes:l,default:i}}))}(r);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const i=(0,t.k6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,c._X)(s),(0,l.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(i.location.search);n.set(s,e),i.replace({...i.location,search:n.toString()})}),[s,i])]}function x(e){const{defaultValue:n,queryString:r=!1,groupId:i}=e,s=h(e),[t,c]=(0,l.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const l=r.find((e=>e.default))??r[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:n,tabValues:s}))),[o,u]=m({queryString:r,groupId:i}),[x,j]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,s]=(0,d.Nk)(r);return[i,(0,l.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:i}),b=(()=>{const e=o??x;return p({value:e,tabValues:s})?e:null})();(0,a.Z)((()=>{b&&c(b)}),[b]);return{selectedValue:t,selectValue:(0,l.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),j(e)}),[u,j,s]),tabValues:s}}var j=r(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(5893);function f(e){let{className:n,block:r,selectedValue:l,selectValue:t,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.o5)(),d=e=>{const n=e.currentTarget,r=c.indexOf(n),i=a[r].value;i!==l&&(o(n),t(i))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},n),children:a.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...s,className:(0,i.Z)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":l===n}),children:r??n},n)}))})}function v(e){let{lazy:n,children:r,selectedValue:i}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===i));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function y(e){const n=x(e);return(0,g.jsxs)("div",{className:(0,i.Z)("tabs-container",b.tabList),children:[(0,g.jsx)(f,{...e,...n}),(0,g.jsx)(v,{...e,...n})]})}function w(e){const n=(0,j.Z)();return(0,g.jsx)(y,{...e,children:u(e.children)},String(n))}},1151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>t});var l=r(7294);const i={},s=l.createContext(i);function t(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);