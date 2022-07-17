import { uuid } from "uuidv4";
import baby2 from "./postimages/baby2.jpg";
import what from "./postimages/reactjs.jpg";
import mobile from "./postimages/mobile.jpg";
import earth from "./postimages/earth.jpg";
import github from "./postimages/github.jpg";
import taart from "./postimages/taart.png";
import speed from "./postimages/andrea.jpg";
import phone from "./postimages/iphone.jpg";


export const Daata = [

  {
    id: uuid(),
    title: "When not to use React?",
    subtitle: "You can start small.",
    body: "You don’t need to use React to build 100% of your user interface. Instead, you can start really small and test it out in a very narrow scope. This means that it’s not super risky to use React for one or two components. You can get a good feel for it and slowly scale your usage up as you get more comfortable. Before using any framework you need a solid knowledge of JavaScript (JS). You can not code JS if you don't know HTML and CSS. For a professional web developer, there is no substantial difference in working with React or HTML, because it just takes some time to get used to using a framework. You don't have to take all the tricks out of your React hat. Just start writing in the root component, (App.js) using JavaScript and HTML",
    image:
      baby2,
  },
  {
    id: uuid(),
    title: "What is React?",
    subtitle: "React is an open source JavaScript library.",
    body: "React really took off on February (6th) 2019, when Hooks were introduced. No more class based but function based programming what made it a lot easier to read. Hooks is an independent feature introduced in ReactJS 16.8, that enables JavaScript developers to write states and other features in function components. You don’t need to deal with the complicated classes anymore. Using Hooks, you can easily manage state logic between components, colocate similar logic in a single component and share data with components without props and classes.",
    image:
      what,
  },
  {
    id: uuid(),
    title: "Who is using React?",
    subtitle: "The winner takes it all.",
    body: "Big billion-dollar companies using React are proof of how good a framework is. Apart from Facebook, most of the well-known famous companies that use ReactJS are Twitter, Amazon Prime, Udemy, Expo, Codesandbox, Uber, and Pinterest. But Facebook is in the centre of it. For the most part, React is a great tool for the above services as they have high traffic. React provides a faster way of building and maintaining mobile applications. Also, these companies can build applications while using fewer resources. It is the best frontend library in existence. Companies that use ReactJS: Facebook, Instagram, Netflix, New York Times, Yahoo, Khan Academy, Whatsapp, Codecademy, Dropbox, Airbnb, Asana, Atlassian, Intercom, Microsoft.",
    image:
      taart,
  },
  {
    id: uuid(),
    title: "Taking the market by storm.",
    subtitle: "Need for speed.",
    body: "A big advantage is the speed of implementation of the tool and the possibility of basing a very dynamic interface on it. This means that it is possible to make necessary updates in real-time without an need for reloading the page, giving that typical flickering when changing from one page to another. You can work remotely on a document, considering the amendments and changes that are still being made.",
    image:
      speed,
  }, {
    id: uuid(),
    title: "Time is money...",
    subtitle: "Writing reusable code.",
    body: "  Another advantage of the framework is its specific, modular design, which allows reusing individual components on a completely different level. Splitting up the app in components also makes it easier to share work and debug faster. Thanks to it, not only does the programmer’s work efficiency increases, but also it is much easier to manage all available applications. Introducing changes in one component will not lead to an exponential fall in the tool’s fluidity and a loss of its stability.",
    image:
      github,
  },
  {
    id: uuid(),
    title: "React Native",
    subtitle: "A mobile first mindset.",
    body: " Mobile phones are everyone's pocket computer. The software for those devices can not be a smaller, responsive version of the computer application.",
    body1: "Touch screens have dynamic keyboards that are different depending on the information you have to type. Are you introducing a date or rather an email? A different keyboard is called, whereas keyboards on computers don't appear on their screens.",
    body2: "Cell phones don't allow 'hover effects'. Querty or Azerty, it can be programmed, maybe you want mainly numbers?",
    image: mobile,
    imgMod: phone,
  },
];

