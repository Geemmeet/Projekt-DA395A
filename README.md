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
