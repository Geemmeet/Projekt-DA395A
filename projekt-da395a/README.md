## Getting Started

In order to be able to run the project you need to have:
* [Node.js](https://nodejs.org/) (npm is included by default)
* A package manager like **npm**, **yarn**, or **pnpm**

As this project uses [Spoonaculars](https://spoonacular.com/food-api) API you need to go to their page and get an API key.
After having recieved a key, create a file inside of the root folder (projekt-da395a) of this project called .env.local
Place your API key inside of this file.

```bash
NEXT_PUBLIC_API_KEY = yourKeyHere
```

Then, go to the correct map
```bash
cd projekt-da395a
```

Install dependencies
```bash
npm install
```

Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Dependencies:
- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind](https://tailwindcss.com)
- [Flowbite](https://flowbite-react.com/)



## Information about the project

We chose to use the React framework together with Next.js, which is used to build fullstack projects and is considered developer-friendly. When comparing Next.js with React, Next.js is a React framework, whereas React is simply a JavaScript library. React is used to build the components that make up the interface, and Next.js provides additional features and optimization.
Sources: next.org/docs & https://radixweb.com/blog/nextjs-vs-react

Compared to Angular, for example, React is considered easier for beginners to learn, which is why we chose to work with React — but also because it is a popular language that is useful to know for future professional work. React is a popular JavaScript library considered flexible for web applications because it is built with smaller components. 

Why we chose React over Angular and Vue:
React is a JavaScript library developed by Facebook, while Angular is a TypeScript framework developed by Google. TypeScript is based on JavaScript and has its advantages, but we chose to use React because we are relatively new to JavaScript and want to solidify that knowledge before learning TypeScript. Angular’s advantages include better error handling and cleaner code, but its steep learning curve is the reason we chose not to use it. Vue is also seen as beginner-friendly, but based on research, it may be easiest to learn once you have a basic understanding of React. The advantages of Vue are said to include “cleaner” code and good, easy-to-understand documentation.
Sources:
https://pagepro.co/blog/react-vs-angular-comparison/
https://www.geeksforgeeks.org/angular-vs-reactjs/
https://medium.com/@serpentarium13/why-i-chose-vue-over-react-b082d81315ab
https://vuejs.org

One of the disadvantages of React is that a framework is often required to reach its full potential. That’s why we chose Next.js, partly because it uses SSR (Server Side Rendering), which generates HTML on the server side and sends it to the client. This shortens load times, improving the user experience. Next.js is considered developer-friendly, partly because updates happen in real-time, so you don’t need to manually refresh the page, and also because it offers a straightforward routing system, which simplifies the development of dynamic web pages.
(https://www.linkedin.com/pulse/top-10-reasons-why-choose-nextjs-scorow-yvv9c/)

Finally, React is considered the most popular choice among developers according to a survey
(https://pagepro.co/blog/react-vs-angular-comparison/#angular-vs-react-learning-curve).

In our project, we also used an additional component library: Flowbite, which provides pre-built UI components based on Tailwind. The group has an ambition to learn Tailwind, but in order to focus on learning React, we chose to work with a framework that provides ready-made design components.